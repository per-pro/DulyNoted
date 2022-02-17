class Comment < ApplicationRecord
    validates :title, :author, :content, presence: true

end
