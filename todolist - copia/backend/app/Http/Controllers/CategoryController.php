<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    // Método para listar todas las categorías
    public function index()
    {
        return response()->json(Category::all());
    }

    // Método para crear una nueva categoría
    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);
        $category = Category::create(['name' => $request->name]);
        return response()->json($category, 201);
    }

    // Método para eliminar una categoría
    public function destroy($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();
        return response()->json(['message' => 'Category deleted successfully']);
    }
}
