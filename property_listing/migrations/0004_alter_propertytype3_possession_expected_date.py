# Generated by Django 4.2.1 on 2023-05-04 18:28

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property_listing', '0003_rename_description_propertytype1_unique_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertytype3',
            name='possession_expected_date',
            field=models.DateField(default=datetime.datetime(2023, 6, 1, 18, 28, 37, 970781, tzinfo=datetime.timezone.utc)),
        ),
    ]
