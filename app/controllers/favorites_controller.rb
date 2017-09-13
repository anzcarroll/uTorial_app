class FavoritesController < ApplicationController

    def index
        @user = User.find(params[:user_id])
        @favorites = @user.favorites.all
    
        render json: @favorites
      end
    
      def show
        @user = User.find(params[:user_id])
        @favorite = @user.favorites.find params[:id]
    
        render json: @favorite
      end


end
