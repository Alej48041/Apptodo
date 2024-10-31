<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return response()->json(Task::all());
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'is_completed' => 'boolean',
        ]);

        $task = Task::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'is_completed' => $request->is_completed ?? false,
        ]);

        return response()->json($task, 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'is_completed' => 'boolean',
        ]);

        $task = Task::findOrFail($id);
        $task->title = $request->title;
        $task->category_id = $request->category_id;
        $task->is_completed = $request->is_completed;
        $task->save();

        return response()->json($task);
    }

    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();
        return response()->json(['message' => 'Task deleted successfully']);
    }
}
