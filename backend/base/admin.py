from django.contrib import admin
from .models import Product,Review,Order,orderItem,ShippingAddress,User


# Register your models here.

admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Order)
admin.site.register(orderItem)
admin.site.register(ShippingAddress)