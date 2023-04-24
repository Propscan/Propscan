from django.db import models


class PropertyType1(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ('flat', 'Flat'),
        ('villa', 'Villa'),
        ('builder_floor', 'Builder Floor'),
    ]

    FURNISHING_CHOICES = [
        ('furnished', 'Furnished'),
        ('semi_furnished', 'Semi-Furnished'),
        ('unfurnished', 'Unfurnished'),
    ]

    OWNERSHIP_CHOICES = [
        ('freehold', 'Freehold'),
        ('leasehold', 'Leasehold'),
        ('co_op', 'Co-Op'),
        ('power_of_attorney', 'Power of Attorney'),
    ]

    PROPERTY_AVAILABILITY_CHOICES = [
        ('ready_to_move', 'Ready to Move'),
        ('under_construction', 'Under Construction'),
    ]

    PRICE_CHOICES = [
        ('all_inclusive_price', 'All Inclusive Price'),
        ('tax_govt_charges_excluded', 'Tax and Govt Charges Excluded'),
        ('price_negotiable', 'Price Negotiable'),
    ]

    LISTING_TYPE_CHOICES = [
        ('rent','Rent'),
        ('sell','Sell'),
        ('pg','PG'),
    ]

    listing_type = models.CharField(max_length=20, choices=LISTING_TYPE_CHOICES)
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES)
    city = models.CharField(max_length=100)
    locality = models.CharField(max_length=100)
    locality_society = models.CharField(max_length=100)
    sub_locality = models.CharField(max_length=100)
    flat_number = models.CharField(max_length=20, null=True, blank=True)
    house_number = models.CharField(max_length=20, null=True, blank=True)
    floor_number = models.CharField(max_length=20, null=True, blank=True)
    #testting
    bhk_type = models.CharField(max_length=10)
    bedrooms = models.PositiveSmallIntegerField()
    bathrooms = models.PositiveSmallIntegerField()
    balconies = models.PositiveSmallIntegerField()
    other_rooms = models.CharField(max_length=100)
    furnishing_type = models.CharField(max_length=20, choices=FURNISHING_CHOICES)
    parking_available = models.BooleanField()
    covered_parking = models.BooleanField()
    total_floors = models.PositiveSmallIntegerField()
    availability_status = models.CharField(max_length=20, choices=PROPERTY_AVAILABILITY_CHOICES)
    age_of_property = models.PositiveSmallIntegerField()
    images_link = models.URLField(max_length=200)
    ownership_type = models.CharField(max_length=20, choices=OWNERSHIP_CHOICES)
    expected_price = models.PositiveIntegerField()
    price_per_sq_ft = models.DecimalField(max_digits=10, decimal_places=2)
    price_type = models.CharField(max_length=30, choices=PRICE_CHOICES)
    maintenance_amount = models.PositiveIntegerField()
    expected_rental = models.PositiveIntegerField()
    booking_amount = models.PositiveIntegerField()
    annual_dues_payable = models.PositiveIntegerField()
    membership_charge = models.PositiveIntegerField()
    description = models.TextField()
    brokerage = models.BooleanField()
    brokerage_amount = models.PositiveIntegerField(null=True, blank=True)
    negotiable = models.BooleanField()
    maintenance_staff = models.BooleanField()
    water_storage = models.BooleanField()
    rain_water_harvesting = models.BooleanField()
    vaastu_compliant = models.BooleanField()
    solar_panels = models.BooleanField()
    overlooking_pool = models.BooleanField()
    overlooking_park = models.BooleanField()
    overlooking_club = models.BooleanField()
    overlooking_main_road = models.BooleanField()
    gated_society = models.BooleanField()
    corner_property = models.BooleanField()
    property_facing_direction = models.CharField(max_length=20)
    location_advantages = models.TextField()

    def __str__(self):
        return f"{self.property_type} in {self.locality_society} - {self.expected_price}"

class PropertyType2(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ('studio', 'Studio Apartment'),
        ('serviced', 'Serviced Apartment'),
        ('farmhouse', 'Farmhouse')
    ]
    FURNISHING_CHOICES = [
        ('unfurnished', 'Unfurnished'),
        ('semi_furnished', 'Semi Furnished'),
        ('fully_furnished', 'Fully Furnished')
    ]
    OWNERSHIP_CHOICES = [
        ('freehold', 'Freehold'),
        ('leasehold', 'Leasehold'),
        ('co_op', 'Co-operative Society'),
        ('power_of_attorney', 'Power of Attorney')
    ]

    LISTING_TYPE_CHOICES = [
        ('rent','Rent'),
        ('sell','Sell'),
        ('pg','PG'),
    ]

    listing_type = models.CharField(max_length=20, choices=LISTING_TYPE_CHOICES)
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES)
    city = models.CharField(max_length=100)
    locality = models.CharField(max_length=100)
    locality_society = models.CharField(max_length=100)
    sub_locality = models.CharField(max_length=100)
    flat_number = models.CharField(max_length=50)
    bhk = models.PositiveSmallIntegerField()
    super_built_up_area = models.DecimalField(max_digits=10, decimal_places=2)
    built_up_area = models.DecimalField(max_digits=10, decimal_places=2)
    carpet_area = models.DecimalField(max_digits=10, decimal_places=2)
    no_of_bedrooms = models.PositiveSmallIntegerField()
    no_of_bathrooms = models.PositiveSmallIntegerField()
    balconies = models.PositiveSmallIntegerField()
    other_rooms = models.CharField(max_length=100)
    furnishing = models.CharField(max_length=20, choices=FURNISHING_CHOICES)
    parking = models.BooleanField()
    covered_parking = models.BooleanField()
    total_floors = models.PositiveSmallIntegerField()
    floor_number = models.PositiveSmallIntegerField()
    availability_status = models.CharField(max_length=20)
    age_of_property = models.PositiveSmallIntegerField()
    image_links = models.URLField(max_length=200)
    ownership = models.CharField(max_length=20, choices=OWNERSHIP_CHOICES)
    expected_price = models.DecimalField(max_digits=12, decimal_places=2)
    price_per_sq_ft = models.DecimalField(max_digits=10, decimal_places=2)
    all_inclusive_price = models.BooleanField()
    tax_and_govt_charges_excluded = models.BooleanField()
    price_negotiable = models.BooleanField()
    maintenance_amount = models.DecimalField(max_digits=10, decimal_places=2)
    expected_rental = models.DecimalField(max_digits=10, decimal_places=2)
    booking_amount = models.DecimalField(max_digits=10, decimal_places=2)
    annual_dues_payable = models.DecimalField(max_digits=10, decimal_places=2)
    membership_charge = models.DecimalField(max_digits=10, decimal_places=2)
    unique_description = models.TextField()
    brokerage = models.BooleanField()
    brokerage_amount = models.DecimalField(max_digits=10, decimal_places=2)
    negotiable = models.BooleanField()
    maintenance_staff = models.BooleanField()
    water_storage = models.BooleanField()
    rain_water_harvesting = models.BooleanField()
    vaastu_compliant = models.BooleanField()
    solar_panels = models.BooleanField()
    overlooking_pool = models.BooleanField()
    overlooking_park = models.BooleanField()
    overlooking_club = models.BooleanField()
    overlooking_main_road = models.BooleanField()
    gated_society = models.BooleanField()
    corner_property = models.BooleanField()
    property_facing_direction = models.CharField(max_length=20)
    location_advantages = models.TextField()

    def __str__(self):
        return f"{self.property_type} in {self.locality_society} - {self.expected_price}"
