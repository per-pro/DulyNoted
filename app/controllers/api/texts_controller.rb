class Api::TextsController < ApplicationController

    def index
        @texts = Text.all
        render :index
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

    def show
        @text = Text.find_by(id: params[:id])
        render :show
    end

end
