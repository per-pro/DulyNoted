class Author < ApplicationRecord
    CATEGORIES = %w(fiction nonfiction music).freeze

    validates :name, :birth_date, :description, :category, presence: true
    # validates :category, inclusion: CATEGORIES
    # validates :death_date, if: -> {death_date}

    # after_initialize :set_defaults

    # def set_defaults 
    #     {death_date.blank?} ? {alive = true} : {alive = false}
    # end

    has_many :texts,
        class_name: 'Text',
        foreign_key: :author_id
end
