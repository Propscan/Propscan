# Generated by Django 4.1.7 on 2023-05-04 18:27

import datetime
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('property_listing', '0002_rename_image_links_propertytype2_images_links_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='propertytype1',
            old_name='description',
            new_name='unique_description',
        ),
        migrations.AddField(
            model_name='propertytype1',
            name='brokerage_type',
            field=models.CharField(choices=[('fixed', 'Fixed'), ('percentage_of_price', 'Percentage of price')], max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='propertytype2',
            name='brokerage_type',
            field=models.CharField(choices=[('fixed', 'Fixed'), ('percentage_of_price', 'Percentage of price')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='propertytype1',
            name='brokerage_amount',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='propertytype1',
            name='negotiable',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='propertytype2',
            name='brokerage_amount',
            field=models.PositiveIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='propertytype2',
            name='negotiable',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='propertytype2',
            name='property_type',
            field=models.CharField(choices=[('studio_apt', 'Studio Apartment'), ('serviced', 'Serviced Apartment'), ('farmhouse', 'Farmhouse')], max_length=20),
        ),
        migrations.CreateModel(
            name='PropertyType3',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_listed', models.BooleanField(default=True)),
                ('listing_type', models.CharField(choices=[('rent', 'Rent'), ('sell', 'Sell'), ('pg', 'PG')], max_length=20)),
                ('property_type', models.CharField(choices=[('plot', 'Plot')], max_length=20)),
                ('property_sub_type', models.CharField(choices=[('resedential', 'Resedential'), ('commercial', 'Commercial')], max_length=20)),
                ('city', models.CharField(max_length=100)),
                ('locality', models.CharField(max_length=100)),
                ('locality_society', models.CharField(max_length=100)),
                ('sub_locality', models.CharField(max_length=100)),
                ('plot_number', models.CharField(max_length=50)),
                ('plot_area', models.DecimalField(decimal_places=2, max_digits=10)),
                ('length', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('breadth', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('boundary_wall', models.BooleanField()),
                ('number_of_open_sides', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(4)])),
                ('any_construction_done', models.BooleanField()),
                ('no_of_sheds_constructed', models.PositiveIntegerField(null=True)),
                ('no_of_rooms_constructed', models.PositiveIntegerField(null=True)),
                ('no_of_washrooms_constructed', models.PositiveIntegerField(null=True)),
                ('number_of_floors_allowed_for_construction', models.PositiveIntegerField(validators=[django.core.validators.MinValueValidator(1)])),
                ('possession_expected_date', models.DateField(default=datetime.datetime(2023, 6, 1, 18, 26, 51, 330635, tzinfo=datetime.timezone.utc))),
                ('images_link', models.URLField()),
                ('ownership', models.CharField(choices=[('leasehold', 'Leasehold'), ('co-op_society', 'Co-op Society'), ('power_of_attorney', 'Power of Attorney')], max_length=20)),
                ('property_approving_authority', models.CharField(choices=[('rcuda', 'RCUDA'), ('cidc', 'CIDC'), ('nmmc', 'NMMC')], max_length=10)),
                ('expected_price', models.DecimalField(decimal_places=2, max_digits=12)),
                ('price_per_sq_ft', models.DecimalField(decimal_places=2, max_digits=10)),
                ('all_inclusive_price', models.BooleanField()),
                ('tax_and_govt_charges_excluded', models.BooleanField()),
                ('price_negotiable', models.BooleanField()),
                ('maintenance_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('expected_rental', models.DecimalField(decimal_places=2, max_digits=10)),
                ('booking_amount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('annual_dues_payable', models.DecimalField(decimal_places=2, max_digits=10)),
                ('membership_charge', models.DecimalField(decimal_places=2, max_digits=10)),
                ('unique_description', models.TextField()),
                ('brokerage', models.BooleanField()),
                ('brokerage_type', models.CharField(choices=[('fixed', 'Fixed'), ('percentage_of_price', 'Percentage of price')], max_length=20, null=True)),
                ('brokerage_amount', models.PositiveIntegerField(null=True)),
                ('negotiable', models.BooleanField(null=True)),
                ('maintenance_staff', models.BooleanField()),
                ('water_storage', models.BooleanField()),
                ('rain_water_harvesting', models.BooleanField()),
                ('vaastu_compliant', models.BooleanField()),
                ('solar_panels', models.BooleanField()),
                ('overlooking_pool', models.BooleanField()),
                ('overlooking_park', models.BooleanField()),
                ('overlooking_club', models.BooleanField()),
                ('overlooking_main_road', models.BooleanField()),
                ('gated_society', models.BooleanField()),
                ('corner_property', models.BooleanField()),
                ('property_facing_direction', models.CharField(max_length=20)),
                ('location_advantages', models.TextField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]