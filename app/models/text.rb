class Text < ApplicationRecord
    validates :title, :source, :author, :content, presence: true
    
    
end
