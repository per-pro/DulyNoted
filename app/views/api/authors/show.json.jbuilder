json.authors do
    json.set! @author.id do
        json.partial! 'api/authors/author', author: @author
    end
end

json.texts do
    @artist.texts.each do |text|
        json.set! text.id do
            json.partial! 'api/texts/text', text: text
        end
    end
end