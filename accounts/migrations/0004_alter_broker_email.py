# Generated by Django 4.2 on 2023-04-24 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_broker_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='broker',
            name='email',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]