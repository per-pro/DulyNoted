class User < ApplicationRecord
    validates :username, :session_token, presence: true. uniqueness: true
    vaidates :password_digest, presence: true

end
