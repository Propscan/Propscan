from django.http import HttpResponse
from django.shortcuts import render
from .forms import broker_form, buyer_reg
from accounts.models import PropScanUser, Buyer, Owner, Broker
import random
import requests
from .settings import api_key
from rest_framework.views import APIView

from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, authentication_classes, permission_classes






def homepage(request):
    return render(request, 'index.html')
otp=0
def login(request):
    
    
    otp=random.randint(1000,9999)
    if request.method == 'POST':
        if 'otp_btn' in request.POST:
            mobile = request.POST.get('mobile')
            exists=PropScanUser.objects.filter(phone_no=mobile).exists()
            if exists:
                print(mobile)
               
                url = f'https://2factor.in/API/V1/{api_key}/SMS/{mobile}/{otp}'
                try:
                    res = requests.get(url)
                    res.raise_for_status()
                    print('OTP sent successfully')
                except requests.exceptions.HTTPError as e:
                    print(f'HTTP error occurred: {e}')
                except Exception as e:
                    print(f'Error occurred: {e}')
                context = {
                    'mobile': mobile,
                'otp_sent': otp
                    }
                return render(request, 'login.html',context)
            else:
                return HttpResponse('User does not exist')
        if 'sub_btn' in request.POST:
            otp = request.POST.get('otp')
            if otp== otp:
                return HttpResponse('OTP verified successfully')
            else:
                print('Invalid OTP')
                return HttpResponse('Invalid OTP')
                  
    return render(request, 'login.html')


def register_user(request):
    if request.method=='POST':
        form=buyer_reg(request.POST)
        if form.is_valid():
            user=form.cleaned_data['fullname']
            email=form.cleaned_data['emailid']
            user_type="BUYER"
            phone=form.cleaned_data['phone_no']
            
            mymodel=PropScanUser.objects.create_user(username=user,email_id=email,phone_no=phone,user_type=user_type)
            
            buyermodel=Buyer.objects.create(phone_no=phone,full_name=user)
            return HttpResponse('Thank you for your registration.')
    else:
        form=buyer_reg()
    return render(request, 'register_user.html', {'form': form})


def register_broker(request):
    if request.method == 'POST':
        form = broker_form(request.POST)
        if form.is_valid():
            user=form.cleaned_data['full_name']
            email_id=form.cleaned_data['email']
            user_type="BROKER"
            phone=form.cleaned_data['additional_phone_no_1']
            
            mymodel=PropScanUser.objects.create_user(username=user,email_id=email_id,phone_no=phone,user_type=user_type)
            
            
            form.instance.user = user
            form.save()
            return HttpResponse('Thank you for your registration.')
    else:
        form = broker_form()
    return render(request, 'register_broker.html', {'form': form})