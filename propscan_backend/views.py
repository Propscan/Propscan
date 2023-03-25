from django.http import HttpResponse
from django.shortcuts import render
def homepage(request):
    return render(request, 'index.html')
def login(request):
    return render(request, 'login.html')
def register_user(request):
    return render(request, 'register_user.html')
def register_broker(request):
    return render(request, 'register_broker.html')