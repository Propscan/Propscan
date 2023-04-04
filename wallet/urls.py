from django.urls import path
from . import views

urlpatterns = [
    path('wallets/', views.wallet_list, name='wallet_list'),
    path('wallets/<int:pk>/', views.wallet_detail, name='wallet_detail'),
    path('wallets/<int:pk>/add_funds/', views.add_funds, name='add_funds'),
]