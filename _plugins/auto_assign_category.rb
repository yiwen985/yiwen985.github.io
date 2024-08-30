# _plugins/auto_assign_category.rb
Jekyll::Hooks.register :site, :post_read do |site|
    site.posts.docs.each do |post|
      if !post.data['categories'] || post.data['categories'].empty?
        post.data['categories'] = ['未分类']
      end
    end
  end