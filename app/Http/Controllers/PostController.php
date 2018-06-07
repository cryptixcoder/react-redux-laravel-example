<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return response()->json([
            'posts' => $posts
        ]);
    }

    public function show(Post $post)
    {
        return response()->json([
            'post' => $post
        ]);
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author
        ]);

        return response()->json([
            "post" => $post
        ]);
    }

    public function update(Request $request, Post $post)
    {
        $post->update([
            'title' => $request->title,
            'content' => $request->content,
            'author' => $request->author
        ]);

        return response()->json([], 200);
    }

    public function destroy(Post $post)
    {
        $post->delete();

        return response()->json([], 200);
    }
}
