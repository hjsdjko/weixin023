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


import com.cl.dao.ShequxiaoxiDao;
import com.cl.entity.ShequxiaoxiEntity;
import com.cl.service.ShequxiaoxiService;
import com.cl.entity.view.ShequxiaoxiView;

@Service("shequxiaoxiService")
public class ShequxiaoxiServiceImpl extends ServiceImpl<ShequxiaoxiDao, ShequxiaoxiEntity> implements ShequxiaoxiService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ShequxiaoxiEntity> page = this.selectPage(
                new Query<ShequxiaoxiEntity>(params).getPage(),
                new EntityWrapper<ShequxiaoxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ShequxiaoxiEntity> wrapper) {
		  Page<ShequxiaoxiView> page =new Query<ShequxiaoxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<ShequxiaoxiView> selectListView(Wrapper<ShequxiaoxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ShequxiaoxiView selectView(Wrapper<ShequxiaoxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
