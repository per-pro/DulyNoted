class Text < ApplicationRecord
    validates :title, :source, :author, :content, presence: true
    
    belongs_to :author
        class_name: 'Author',
        foreign_key: :name_id
end
