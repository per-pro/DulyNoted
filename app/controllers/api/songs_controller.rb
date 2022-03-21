class Api::TextsController < ApplicationController

    def index
        @texts = Text.all 
    end

    def new 
        @text = Text.new
    end

    def create
        @text = Text.new(title: "...", author: "...", content: "...")

        if @text.save
            redirect_to @text
        else 
            render :new, status: :error
        end 
    end 

end
