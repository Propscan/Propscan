from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User
from .models import Buyer, Broker, Owner, PropScanUser

@api_view(['POST'])
def register(request):
        # Get form values
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        password2 = request.data.get('password2')

        # Check if passwords match
        if password == password2:
            # Check username
            if User.objects.filter(username=username).exists():
                messages.error(request, 'The username already exists')
                return Response(status=400)
            else:
                if User.objects.filter(email=email).exists():
                    messages.error(request, 'The email already exists')
                    return Response(status=400)
                else:
                    # Everything passed
                    user = User.objects.create_user(username=username, password=password, email=email, first_name=first_name, last_name=last_name)
                    # Login after register
                    user.save()
                    messages.success(request, 'You are now registered and can Log In')
                    return Response(status=201)
        else:
            messages.error(request, 'Passwords do not match')
            return Response(status=400)
    
@api_view(['POST'])
def register_for_buyer(request):
    full_name = request.data.get('full_name')
    phone_no = request.data.get('phone_no')
    email_id = request.data.get('email_id')

    if PropScanUser.objects.filter(email_id = email_id).exists():
        messages.error(request, 'This Email already exists')
        return Response(status=400)
    
@api_view(['POST'])
def register_for_owner(request):
    full_name = request.data.get('full_name')
    phone_no = request.data.get('phone_no')
    additional_phone_no = request.data.get('additional_phone_no')
    email_id = request.data.get('email_id')

    if PropScanUser.objects.filter(email_id = email_id).exists():
        messages.error(request, 'This Email already exists')
        return Response(status=400)
