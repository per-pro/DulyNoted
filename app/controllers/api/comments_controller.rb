class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all 
    end

    def new 
        @comment = Comment.new
    end

    def create
        @comment = Comment.new(title: "...", author: "...", content: "...")

        if @comment.save
            redirect_to @comment
        else 
            render :new, status: :error
        end 
    end 
end
