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
        @author = author_id.find(params[:id]) 
        # this line of code might be wrong, 
        # I'm not sure if this is the right syntax
        render :edit
    end

    # should I add other routing actions? I can add them as they become necessary

end