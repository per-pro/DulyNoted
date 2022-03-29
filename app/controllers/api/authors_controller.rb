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

    # should I add other routing actions? I can add them as they become necessary

end