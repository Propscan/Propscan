# Generated by Django 4.2.1 on 2023-05-05 15:37

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('property_listing', '0008_alter_propertytype3_possession_expected_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='propertytype3',
            name='possession_expected_date',
            field=models.DateField(default=datetime.datetime(2023, 6, 1, 15, 37, 43, 387628, tzinfo=datetime.timezone.utc)),
        ),
    ]
