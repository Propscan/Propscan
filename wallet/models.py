from django.db import models
from accounts.models import PropScanUser

class Wallet(models.Model):
    user = models.OneToOneField(PropScanUser, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"{self.user.phone_no}'s Wallet"