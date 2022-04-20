class Api::AuthorsController < ApplicationController

    def index
        @authors = Author.all
    end

    def new 
        @author = Author.new
    end

    def create
        @author = Author.new(name: "...")

        if @comment.save
            redirect_to @author
        else
            render :new, status: :error
        end
    end

    def edit
        @author = Author.find(params[:id]) 
        render :edit
    end
end