class Text < ApplicationRecord
    validates :title, :source, :content, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :Author
end
