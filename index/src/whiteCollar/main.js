/*
 * Copyright (c) 2011 by Marfeel Solutions (http://www.marfeel.com)
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Marfeel Solutions S.L and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Marfeel Solutions S.L and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Marfeel Solutions SL.
 */

//www.example.com/index/src/whiteCollar/main.js

document.whiteCollar = {
    getItems: function () {
        return document.querySelectorAll("");
    },

    getItem: function(articleNode) {
        var item = {
            title:articleNode.querySelector('').innerText,
            uri:articleNode.querySelector('a').href,
            media:articleNode.querySelectorAll('img'),
            subtitle:articleNode.querySelector(''),
            pocket: {
                categories: articleNode.querySelectorAll('')
            },
            author:articleNode.querySelector(''),
            date:articleNode.querySelector('.date'),
            excerpt:articleNode.querySelector('')
        };

        if(item.subtitle) {
            item.subtitle = item.subtitle.innerText;
        }

        var categoriesNode = item.pocket.categories;
        if(categoriesNode) {
            var categories = [];
            for(var i = 0; i < categoriesNode.length; i++) {
                categories.push(categoriesNode[i].innerText);
            }
            item.pocket.categories = categories
        }

        if(item.author){
            item.author = {
                name: item.author.innerText
            }
        }

        if(item.date) {
            item.date = item.date.innerHTML;
        }

        if(item.excerpt) {
            item.excerpt = item.excerpt.innerText;
        }

        return item;
    }
};



