Rails.application.routes.draw do
  root 'home#index'
  devise_for :users, controllers: { registrations: "registration"}
  namespace :api do
    resources :tutorials do
      resources :favorites, only: [:index, :show]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
