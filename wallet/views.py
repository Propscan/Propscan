from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Wallet
from .serializers import WalletSerializer
import razorpay

@api_view(['GET', 'POST'])
def wallet_list(request):
    if request.method == 'GET':
        wallets = Wallet.objects.all()
        serializer = WalletSerializer(wallets, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = WalletSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def wallet_detail(request, pk):
    wallet = get_object_or_404(Wallet, pk=pk)

    if request.method == 'GET':
        serializer = WalletSerializer(wallet)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = WalletSerializer(wallet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        wallet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def add_funds(request, pk):
    wallet = get_object_or_404(Wallet, pk=pk)
    amount = request.data.get('amount', 0)
    amount_in_paise = int(amount) * 100

    client = razorpay.Client(auth=(request.settings.RAZORPAY_KEY_ID, request.settings.RAZORPAY_KEY_SECRET))
    payment = client.order.create(dict(amount=amount_in_paise, currency='INR', payment_capture=1))

    if payment:
        wallet.balance += int(amount)
        wallet.save()
        return Response({'status': 'success', 'data': payment}, status=status.HTTP_200_OK)
    else:
        return Response({'status': 'failed'}, status=status.HTTP_400_BAD_REQUEST)
