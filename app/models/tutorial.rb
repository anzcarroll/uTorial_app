class Tutorial < ApplicationRecord
    has_many :favorites, dependent: :destroy
end
