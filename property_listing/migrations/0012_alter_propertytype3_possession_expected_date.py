# Generated by Django 4.2 on 2023-05-12 08:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property_listing', '0011_propertytype1_enquiry_recieved_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertytype3',
            name='possession_expected_date',
            field=models.DateField(default=datetime.datetime(2023, 6, 1, 8, 7, 43, 337236, tzinfo=datetime.timezone.utc)),
        ),
    ]