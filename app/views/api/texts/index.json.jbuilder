json.texts do
    @texts.each do |text|
        json.set! text.id do 
#            json.partial! 'api.texts/text', text: text
             json.extract! text, :title, :source, :content, :author_id
        end
    end
end