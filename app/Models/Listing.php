<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    // use HasFactory;
    protected $fillable =
    [
        'location',
        'lot_size',
        'house_size',
        'price',
        'type',
        'bedrooms',
        'bathrooms',
        'amenities',
        'status',
        'created_by'
    ];
}
