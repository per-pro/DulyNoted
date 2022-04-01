json.authors do
    @authors.each do |author|
        json.set! author.id do 
            json.partial! 'api.authors/author', author: author
        end
    end
    json.order do 
        json.array!(@authors) do |author|
            json.id author.id
        end
    end 
end