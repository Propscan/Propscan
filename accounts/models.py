from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class PropScanUser(AbstractUser):
    BUYER = 1
    OWNER = 2
    BROKER = 3

    USER_TYPE_CHOICES = [
    (BUYER,"BUYER"),
    (OWNER,"OWNER"),
    (BROKER,"BROKER")
    ]
    phone_no = models.CharField(max_length=30)
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, default="BUYER",null=False)
    email_id = models.EmailField(max_length=256,unique=True, null=True)
    def __str__(self):
        return self.phone_no
    
class Buyer(models.Model):
    phone_no = models.CharField(max_length=30)
    full_name = models.CharField(max_length=256)
    
    
class Owner(models.Model):
    user = models.OneToOneField(PropScanUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=256)
    additional_phone_no = models.CharField(max_length=30)
    def __str__(self):
        return self.user.email
    
class Broker(models.Model):
    BUYER = 1
    OWNER = 2
    BROKER = 3

    USER_TYPE_CHOICES = [
    ("BUYER","BUYER"),
    ("OWNER","OWNER"),
    ("BROKER","BROKER")
    ]
    LICENSE_TYPE_CHOICES = [
    ("1", "Individual"),
    ("2", "Firm")
    ]
    RERA_REGISTERED_CHOICES = [
    ("1","Yes"),
    ("2","I have applied"),
    ("3","Not Applicable")
    ]
    user=models.CharField(max_length=256, blank=True, null=True)
    email=models.CharField(max_length=256, blank=True, null=True)
    full_name = models.CharField(max_length=256)
    rera_registered = models.CharField(max_length=10, choices=RERA_REGISTERED_CHOICES)
    license_type = models.CharField(max_length=20, choices=LICENSE_TYPE_CHOICES)
    company_name = models.CharField(max_length=100)
    company_url = models.CharField(max_length=100, null=True)
    company_address_1 = models.CharField(max_length=256)
    company_address_2 = models.CharField(max_length=256, null=True)
    city = models.CharField(max_length=50)
    description = models.CharField(max_length=256)
    additional_phone_no_1 = models.CharField(max_length=30, null=True)
    additional_phone_no_2 = models.CharField(max_length=30, null=True)
    landline_number_1 = models.CharField(max_length=30, null=True)
    landline_number_2 = models.CharField(max_length=30, null=True)
   
