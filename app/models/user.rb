class User < ApplicationRecord
    attr_accessor :name, :email, :password
    has_many :favorites, dependent: :destroy
    has_many :tutorials, through: :favorites
end
