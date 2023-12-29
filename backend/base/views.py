from django.shortcuts import render
from django.http import JsonResponse
# from .product import products
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import Product
from .serializer import ProductSerializer

# Create your views here.
def getRoutes(request):
    routes=[
        '/api/products/',
        '/api/product/create/',
        '/api/product/upload/',
        '/api/product/<id>/reviews/',
        '/api/product/top/',
        '/api/product/<id>',
        '/api/product/delete/<id>',
        '/api/product/update/<id>', 
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products=Product.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product=None
    products=Product.objects.all()
    for item in products:
        # print(item['id'],type(item['id']))
        if item['id'] == int(pk):
            print("Found")
            return Response(item)
    return Response(product)
