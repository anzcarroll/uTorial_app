class Api::UsersController < ApplicationController
  # User CRUD

  def create
    @user = User.create!(sign_up_params)
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
    @favorites = @user.favorites
  end

  def edit
    @user = User.find(params[:id])
end

  def update
    @user = User.find(params[:id])
    
    @user.update!(sign_up_params)
    redirect_to api_user_path(@user)
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to root_path
  end

  private
  
    def sign_up_params
      params.permit(:username, :email, :password, :password_confirmation)
    end


end
