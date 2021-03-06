Rails.application.routes.draw do
  namespace :api do
    get 'users/create'
  end

  namespace :api do
    get 'users/show'
  end

  namespace :api do
    get 'users/update'
  end

  namespace :api do
    get 'users/destroy'
  end

  root 'home#index'
  namespace :api do
    resources :tutorials
    resources :users
    resources :favorites
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
