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


import com.cl.dao.WuyefeixinxiDao;
import com.cl.entity.WuyefeixinxiEntity;
import com.cl.service.WuyefeixinxiService;
import com.cl.entity.view.WuyefeixinxiView;

@Service("wuyefeixinxiService")
public class WuyefeixinxiServiceImpl extends ServiceImpl<WuyefeixinxiDao, WuyefeixinxiEntity> implements WuyefeixinxiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<WuyefeixinxiEntity> page = this.selectPage(
                new Query<WuyefeixinxiEntity>(params).getPage(),
                new EntityWrapper<WuyefeixinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<WuyefeixinxiEntity> wrapper) {
		  Page<WuyefeixinxiView> page =new Query<WuyefeixinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<WuyefeixinxiView> selectListView(Wrapper<WuyefeixinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public WuyefeixinxiView selectView(Wrapper<WuyefeixinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
