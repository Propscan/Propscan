from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_property),
    path('get', views.property_type1_list),
    path('card', views.property_type1_card_list)
]
