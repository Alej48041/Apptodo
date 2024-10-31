<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // Especifica los campos que se pueden asignar masivamente
    protected $fillable = ['title', 'description', 'is_completed', 'category_id'];

    // Relación con el modelo Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
