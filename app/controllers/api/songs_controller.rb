class Api::SongsController < ApplicationController

    def index
        @songs = Song.all 
    end

    def new 
        @song = Song.new
    end

    def create
        @song = Song.new(title: "...", author: "...", content: "...")

        if @song.save
            redirect_to @song
        else 
            render :new, status: :error
        end 
    end 

end
