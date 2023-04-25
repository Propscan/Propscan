from django import forms
from accounts.models import PropScanUser, Buyer, Owner, Broker


class broker_form(forms.ModelForm):
    
    class Meta:
        model = Broker
        fields= ['full_name','email','rera_registered','license_type','company_name','company_url','company_address_1','company_address_2','city','description','additional_phone_no_1','additional_phone_no_2','landline_number_1','landline_number_2']
        
class buyer_reg(forms.Form):
        fullname=forms.CharField(max_length=256)
        emailid=forms.EmailField(max_length=256)
        phone_no=forms.CharField(max_length=30)

class login(forms.Form):
        phone_no=forms.CharField(max_length=30)
        otp=forms.CharField(max_length=6)

        
