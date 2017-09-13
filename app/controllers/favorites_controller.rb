class FavoritesController < ApplicationController
    before_action :authenticate_user!

    def index
       @favorites = Favorites.all
    end

    def show
        @favorite = Favorite.first
    end


end
