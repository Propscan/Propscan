from django.http import HttpResponse
from django.shortcuts import render
from .forms import broker_form
from accounts.models import PropScanUser, Buyer, Owner, Broker


def homepage(request):
    return render(request, 'index.html')
def login(request):
    return render(request, 'login.html')
def register_user(request):
    return render(request, 'register_user.html')


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