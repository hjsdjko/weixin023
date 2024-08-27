package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.DiscussshequhuodongDao;
import com.cl.entity.DiscussshequhuodongEntity;
import com.cl.service.DiscussshequhuodongService;
import com.cl.entity.view.DiscussshequhuodongView;

@Service("discussshequhuodongService")
public class DiscussshequhuodongServiceImpl extends ServiceImpl<DiscussshequhuodongDao, DiscussshequhuodongEntity> implements DiscussshequhuodongService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DiscussshequhuodongEntity> page = this.selectPage(
                new Query<DiscussshequhuodongEntity>(params).getPage(),
                new EntityWrapper<DiscussshequhuodongEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DiscussshequhuodongEntity> wrapper) {
		  Page<DiscussshequhuodongView> page =new Query<DiscussshequhuodongView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<DiscussshequhuodongView> selectListView(Wrapper<DiscussshequhuodongEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DiscussshequhuodongView selectView(Wrapper<DiscussshequhuodongEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
