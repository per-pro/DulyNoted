class Author < ApplicationRecord
    CATEGORIES = %w(philosopher revolutionary analyst genealogist feminist musician poet).freeze

    validates :name, :birth_date, :description, :category, presence: true
    validates :category, inclusion: CATEGORIES
    validates :alive, inclusion: {in: [ true, false ]}

    has_many :texts,
        foreign_key: :author_id
end
