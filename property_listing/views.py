from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PropertyType1Serializer, PropertyType1LimitedSerializer
from .models import PropertyType1

@api_view(['POST'])
def create_property(request):
    print("create_property called")
    serializer = PropertyType1Serializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Property Created Successfully"})
    else:
        return Response(serializer.errors, status=400)

@api_view(['GET'])
def property_type1_list(request):
    properties = PropertyType1.objects.all()
    serializer = PropertyType1Serializer(properties, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def property_type1_card_list(request):
    properties = PropertyType1.objects.all()
    serializer =  PropertyType1LimitedSerializer(properties, many=True)
    return Response(serializer.data)