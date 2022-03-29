class Comment < ApplicationRecord
    validates :title, :author, :content, presence: true

    belongs_to :user,
        class_name: 'User',
        foreign_key: :author_id
end
